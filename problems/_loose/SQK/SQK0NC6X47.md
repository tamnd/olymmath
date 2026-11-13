---
tag: SQK0NC6X47
kind: problem
type: answer
answer: "40"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XI Olimpiada Matemática Rioplatense
---
Cintia tiene una larga tira de papel donde están escritos todos los números naturales de 20 dígitos, ordenados de menor a mayor (desde $00\ldots01$ hasta $999\ldots99$) sin espacios entre números consecutivos. Cintia elige un número entero positivo $k$ y se lo dice a Elicita. A continuación Elicita elige $k$ dígitos consecutivos de la tira de papel, hace una fotocopia del segmento de papel que contiene esos $k$ dígitos y se lo entrega a Cintia. Con esta tira de $k$ dígitos a la vista, Cintia debe determinar el lugar exacto de la tira larga de papel donde se encuentra el segmento fotocopiado.

Halla el menor valor de $k$ que le permite a Cintia cumplir el objetivo, no importa cuáles sean los $k$ digitos consecutivos que decida fotocopiar Elicita.
