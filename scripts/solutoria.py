import requests
import MySQLdb
import time
import datetime

# DB CONNECTION
conn = MySQLdb.connect(charset='utf8', host="localhost",
                       user="",
                       passwd="",
                       db="")

sesion = requests.session()
url = "https://postulaciones.solutoria.cl"

header = {
    "User-Agent": "Hola desde python",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "Content-type": "application/json; charset=utf-8",
}

# getting token
data = """{"userName": "ebanyu579iz_vdq@indeedemail.com",
        "flagJson": true
        }"""
resToken = sesion.post(url + "/api/acceso", headers=header, data=data)

if resToken.status_code == 200:
    token = resToken.json()["token"]
    print(token)

header["Authorization"] = "Bearer " + token

res = sesion.get(url + "/api/indicadores", headers=header)
print(res.status_code)

for el in res.json():
    if el["codigoIndicador"] == "UF":
        nombreIndicador = el["nombreIndicador"]
        codigoIndicador = el["codigoIndicador"]
        unidadMedidaIndicador = el["unidadMedidaIndicador"]
        valorIndicador = el["valorIndicador"]
        fechaIndicador = el["fechaIndicador"] + " 00:00:00"
        tiempoIndicador = el["tiempoIndicador"]
        origenIndicador = el["origenIndicador"]


        # print(el)

        x = conn.cursor()
        try:
            x.execute("""INSERT INTO ufs (nombreIndicador,codigoIndicador,unidadMedidaIndicador,valorIndicador,fechaIndicador,tiempoIndicador,origenIndicador)
                            VALUES (%s,%s,%s,%s,%s,%s,%s) ON DUPLICATE KEY UPDATE nombreIndicador=%s""",
                      [nombreIndicador, codigoIndicador, unidadMedidaIndicador, valorIndicador, fechaIndicador, tiempoIndicador, origenIndicador, nombreIndicador])
            conn.commit()
        except Exception as e:
            print(e)
            conn.rollback()
        x.close()
