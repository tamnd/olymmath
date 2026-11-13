---
tag: P26JHXDZB4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $N$ objects of which $N_{a}$ have property $a$, $N_{b}$ have property $b$, $N_{c}$ have property $c$, $N_{a, b}$ have properties $a$ and $b$, $N_{a, c}$ have properties $a$ and $c$, and $N_{b, c}$ have properties $b$ and $c$. Prove that

$$
3 N+N_{a, b}+N_{b, c}+N_{c, a} \geq 2 N_{a}+2 N_{b}+2 N_{c}
$$
