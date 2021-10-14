import sys


def txt_importer(path_file):
    document_type = path_file[-4:]
    if document_type != ".txt":
        print("Formato inválido", file=sys.stderr)
    try:
        file = open(path_file, "r")
        return file.read().splitlines()
    except FileNotFoundError:
        print(f"Arquivo {path_file} não encontrado", file=sys.stderr)
