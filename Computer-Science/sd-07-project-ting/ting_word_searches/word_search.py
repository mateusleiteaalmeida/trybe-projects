from ting_file_management.file_management import txt_importer


def exists_word(word, instance):
    files = instance.get_files()
    for file in files:
        dict = {
                  "palavra": word,
                  "arquivo": file["nome_do_arquivo"],
                  "ocorrencias": []
                }
        file_content = txt_importer(file["nome_do_arquivo"])
        for index, line in enumerate(file_content):
            if word.lower() in line.lower():
                dict["ocorrencias"].append({"linha": index + 1})
    if len(dict["ocorrencias"]) != 0:
        return [dict]
    else:
        return []


def search_by_word(word, instance):
    files = instance.get_files()
    for file in files:
        dict = {
                  "palavra": word,
                  "arquivo": file["nome_do_arquivo"],
                  "ocorrencias": []
                }
        file_content = txt_importer(file["nome_do_arquivo"])
        for index, line in enumerate(file_content):
            if word.lower() in line.lower():
                dict["ocorrencias"].append({
                  "linha": index + 1,
                  "conteudo": line})
    if len(dict["ocorrencias"]) != 0:
        return [dict]
    else:
        return []
