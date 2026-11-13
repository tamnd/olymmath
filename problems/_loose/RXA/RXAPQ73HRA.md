---
tag: RXAPQ73HRA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In some computer languages (such as APL), when there are no parentheses in an algebraic expression, the operations are grouped from right to left. Thus, $a\times b-c$ in such languages means the same as $a(b-c)$ in ordinary algebraic notation. If $a\div b-c+d$ is evaluated in such a language, the result in ordinary algebraic notation would be
$\mathrm{(A)\ } \frac{a}{b}-c+d \mathrm{(B) \ }\frac{a}{b}-c-d \mathrm{(C) \ } \frac{d+c-b}{a} \mathrm{(D) \ } \frac{a}{b-c+d} \mathrm{(E) \ }\frac{a}{b-c-d}$
