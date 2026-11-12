---
tag: ZTS4EEPCDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi, \eta, X, Y$ be random variables bounded in absolute value by one. Prove the Clauser-Horne-Shimony-Holt inequality

$$
|\mathrm{E} \xi X+\mathrm{E} \xi Y+\mathrm{E} \eta X-\mathrm{E} \eta Y| \leqslant 2 .
$$

Under what condition is equality achieved?
