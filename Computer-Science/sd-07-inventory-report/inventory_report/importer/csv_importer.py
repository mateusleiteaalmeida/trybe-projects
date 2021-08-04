from inventory_report.importer.importer import Importer
import csv


class CsvImporter(Importer):
    def import_data(report_path):
        document_type = report_path[-3:]
        if document_type != "csv":
            raise ValueError("Arquivo inválido")
        report_list = []
        with open(report_path, mode="r") as file:
            report_reader = csv.DictReader(file)
            for row in report_reader:
                report_list.append(row)
        return report_list
