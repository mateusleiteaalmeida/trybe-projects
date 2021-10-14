import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    for item in range(len(instance)):
        if instance.search(item)["nome_do_arquivo"] == path_file:
            return False
    dict = {
      "nome_do_arquivo": path_file,
      "qtd_linhas": len(txt_importer(path_file)),
      "linhas_do_arquivo": txt_importer(path_file)
    }
    print(f"{str(dict)}", file=sys.stdout)
    instance.enqueue(dict)


def remove(instance):
    if len(instance) == 0:
        print("Não há elementos", file=sys.stdout)
    else:
        removed_file = instance.dequeue()["nome_do_arquivo"]
        print(f"Arquivo {removed_file} removido com sucesso", file=sys.stdout)


def file_metadata(instance, position):
    try:
        print(f"{instance.search(position)}", file=sys.stdout)
    except IndexError:
        print("Posição inválida", file=sys.stderr)
