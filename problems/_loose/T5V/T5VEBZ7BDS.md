---
tag: T5VEBZ7BDS
kind: problem
type: answer
answer: (a, b, c) in {(1, 2023, 2023^2), (7^2, 2023, 17^4), (17^4, 2023, 7^2), (2023^2, 2023, 1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the positive integers $a$, $b$, $c$ with the following properties:
(i) $(a^2 + b^2)(c^2 + 2023^2) = (ab + 2023c)^2$;
(ii) $(a^2 + 2023^2)(b^2 + c^2) = (2023a + bc)^2$;
(iii) the greatest common divisor of $a$, $b$, $c$ and $2023$ equals $1$.
