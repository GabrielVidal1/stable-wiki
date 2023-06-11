import os
import subprocess
import re

def export_figures(tex_file):
    # Read the LaTeX file
    with open(tex_file, 'r') as file:
        tex_content = file.read()

    # Find all figure environments
    figure_pattern = r'\\begin{figure}.*?\\end{figure}'
    figures = re.findall(figure_pattern, tex_content, re.DOTALL)

    # Create a directory to store the exported images
    output_dir = 'exported_figures'
    os.makedirs(output_dir, exist_ok=True)

    # Export each figure as an image
    for i, figure in enumerate(figures):
        # Find the caption within the figure environment
        caption_pattern = r'\\caption{(.*?)}'
        caption_match = re.search(caption_pattern, figure)
        if caption_match:
            caption = caption_match.group(1)
        else:
            caption = f'Figure {i+1}'

        # Save the figure as a temporary LaTeX file
        temp_tex_file = os.path.join(output_dir, f'temp_figure_{i}.tex')
        with open(temp_tex_file, 'w') as file:
            file.write(figure)

        # Compile the temporary LaTeX file to generate the PDF
        subprocess.call(['pdflatex', '-interaction=batchmode', temp_tex_file])

        # Convert the PDF to an image using ImageMagick
        pdf_file = temp_tex_file.replace('.tex', '.pdf')
        output_file = os.path.join(output_dir, f'figure_{i}.png')
        subprocess.call(['convert', '-density', '300', pdf_file, '-quality', '90', output_file])

        # Remove the temporary files
        os.remove(temp_tex_file)
        os.remove(pdf_file)

        # Print the exported figure's caption
        print(f'Exported Figure {i+1}: {caption}')

# Specify the LaTeX file to process
latex_file = 'your_document.tex'

# Export figures
export_figures(latex_file)
