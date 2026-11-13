---
tag: CW1Z00CFMV
kind: problem
type: answer
answer: a_{1000} < c_{1000} < b_{1000}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
A sequence $(a_n)$ satisfies $a_1 = 2$, $a_2 = 3$, $a_3 = 5$ and $a_n = a_{n-1}^2$ for any $n \ge 4$. A sequence $(b_n)$ satisfies $b_1 = 2$, $b_2 = 3$, $b_3 = 5$ and $b_n = b_{n-1} \cdot b_{n-2} \cdot b_{n-3}^2$ for any $n \ge 4$. A sequence $(c_n)$ satisfies $c_1 = 2$, $c_2 = 3$, $c_3 = 5$ and $c_n = c_1 \cdot c_2 \cdots c_{n-1}$ for any $n \ge 4$. Order the numbers $a_{1000}$, $b_{1000}$ and $c_{1000}$ by size.
