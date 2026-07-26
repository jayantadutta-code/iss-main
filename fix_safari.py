import os

files = ['index1.html', 'index2.html', 'index3.html', 'index4.html', 'index5.html', 'index6.html', 'index7.html', 'index8.html', 'index9.html', 'index10.html', 'index11.html']

for file in files:
    if not os.path.exists(file): continue
    with open(file, 'r') as f:
        lines = f.readlines()
    
    modified = False
    new_lines = []
    
    i = 0
    while i < len(lines):
        new_lines.append(lines[i])
        if 'backdrop-filter' in lines[i] and '-webkit-backdrop-filter' not in lines[i]:
            if i + 1 < len(lines) and '-webkit-backdrop-filter' not in lines[i+1]:
                webkit_line = lines[i].replace('backdrop-filter', '-webkit-backdrop-filter')
                new_lines.append(webkit_line)
                modified = True
        i += 1
        
    if modified:
        with open(file, 'w') as f:
            f.writelines(new_lines)
        print(f"Updated {file}")
