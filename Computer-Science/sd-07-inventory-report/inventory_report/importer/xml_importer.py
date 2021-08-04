from inventory_report.importer.importer import Importer
import xml.etree.ElementTree as ET


class XmlImporter(Importer):
    def import_data(report_path):
        document_type = report_path[-3:]
        if document_type != "xml":
            raise ValueError("Arquivo inválido")
        report_list = []
        tree = ET.parse(report_path)
        root = tree.getroot()
        all_records = root.findall('record')
        for record in all_records:
            element = {}
            for item in record:
                element[item.tag] = item.text
            report_list.append(element)
        return report_list
