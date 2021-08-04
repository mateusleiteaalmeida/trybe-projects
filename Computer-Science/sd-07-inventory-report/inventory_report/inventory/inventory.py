
from inventory_report.importer.csv_importer import CsvImporter
from inventory_report.importer.json_importer import JsonImporter
from inventory_report.importer.xml_importer import XmlImporter
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.reports.simple_report import SimpleReport


class Inventory:
    def import_data(report_path, report_type):
        document_type = report_path[-3:]

        if document_type == "csv":
            report_list = CsvImporter.import_data(report_path)

        elif document_type == "son":
            report_list = JsonImporter.import_data(report_path)

        elif document_type == "xml":
            report_list = XmlImporter.import_data(report_path)

        else:
            raise ValueError("Arquivo inválido")

        if report_type == "simples":
            return SimpleReport.generate(report_list)
        else:
            return CompleteReport.generate(report_list)
