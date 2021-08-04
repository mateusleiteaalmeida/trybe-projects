from abc import ABC, abstractmethod


class Importer(ABC):
    @abstractmethod
    def import_data(self):
        raise NotImplementedError

    # @abstractmethod
    # def read_json(report_path):
    #     raise NotImplementedError

    # @abstractmethod
    # def read_xml(report_path):
    #     raise NotImplementedError
