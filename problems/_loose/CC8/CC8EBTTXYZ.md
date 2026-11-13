---
tag: CC8EBTTXYZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
let $ H $ the orthocenter of the triangle $ ABC $

pass two lines $ l_1 $ and $ l_2 $ through $ H $ such that $ l_1 \bot l_2 $

we have $ l_1 \cap BC = D $ and $ l_1 \cap AB = Z $

also $ l_2 \cap BC = E $ and $ l_2 \cap AC = X $ like this picture

pass a line $ d_1$ through $ D $ parallel to $ AC $ and another line $ d_2 $ through $ E $ parallel to $ AB $

let $ d_1 \cap d_2 = Y $

prove $ X $ $ , $ $ Y $ and $ Z $ are on a same line
