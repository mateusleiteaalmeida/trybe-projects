from datetime import datetime
from collections import Counter


class SimpleReport:
    def generate(data):
        manufactoring_date = sorted(
            data, key=lambda data: data["data_de_fabricacao"]
        )[0]["data_de_fabricacao"]

        current_date = datetime.now().date()
        data_sorted_validation = sorted(
            data,
            key=lambda data: current_date
            - datetime.strptime(data["data_de_validade"], "%Y-%m-%d").date(),
            reverse=True,
        )
        valid_dates = []
        for date in data_sorted_validation:
            if (
                datetime.strptime(date["data_de_validade"], "%Y-%m-%d").date()
                > current_date
            ):
                valid_dates.append(date)
        validation_date = valid_dates[0]["data_de_validade"]
        companies = []
        for item in data:
            companies.append(item["nome_da_empresa"])

        most_products_company = Counter(companies).most_common(1)[0][0]

        response = (
            f"Data de fabricação mais antiga: {manufactoring_date}\n"
            f"Data de validade mais próxima: {validation_date}\n"
            "Empresa com maior quantidade de"
            f" produtos estocados: {most_products_company}\n"
        )

        return response
