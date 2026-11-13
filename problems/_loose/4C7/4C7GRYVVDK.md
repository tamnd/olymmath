---
tag: 4C7GRYVVDK
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
In a math period, the teacher asks pupils to solve quadratic equations of the form $x^2 + px + q = 0$ where $p$ and $q$ are some integers. The teacher obtains every new equation by either increasing by 1 or decreasing by 1 the value of either $p$ or $q$ in the equation just solved. In the initial equation, $p = 2020$ and $q = 2010$, whereas in the last equation, $p = 2010$ and $q = 2020$. Is it definitely true that both solutions of at least one equation solved during the period are integers?
