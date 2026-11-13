---
tag: NF3M5GA19B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250569
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $a > 0$ be a real number and let $f : R \to R$ be a function satisfying $$f(x_1) + f(x_2) \ge a f(x_1 + x_2), \forall x_1 ,x_2 \in R.$$ Prove that $$f(x_1) + f(x_2) +(x_3) \ge \frac{3a^2}{a+2} f(x_1+ x_2 + x_3), \forall x_1 ,x_2,x_3 \in R$$.
