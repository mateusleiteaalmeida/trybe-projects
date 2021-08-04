from inventory_report.importer.importer import Importer
import json


class JsonImporter(Importer):
    def import_data(report_path):
        document_type = report_path[-4:]
        if document_type != "json":
            raise ValueError("Arquivo inválido")
        with open(report_path, mode="r") as file:
            report_reader = file.read()
            return json.loads(report_reader)
