---
tag: DDERB4AXGS
kind: problem
type: answer
answer: 0.87x+57.5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the "Fundamentals of Chemistry" by D. I. Mendeleev, data on the solubility of sodium nitrate $\mathrm{NaNO}_{3}$ depending on the temperature of water are provided. The following number of conditional parts of $\mathrm{NaNO}_{3}$ dissolve in 100 parts of water at the corresponding temperatures:

| Temperature ${ }^{\circ} \mathrm{C}$ | 0 | 4 | 10 | 15 | 21 | 29 | 36 | 51 | 68 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Amount of $\mathrm{NaNO}_{3}$ | 66.7 | 71.0 | 76.3 | 80.6 | 85.7 | 92.9 | 99.4 | 113.6 | 125.1 |

Assuming that the amount of $\mathrm{NaNO}_{3}(Y)$ that dissolves in 100 parts of water depends linearly on the temperature $(X)$ of the solution, find the parameters $a$ and $b$ in the formula $y=a x+b$ using the method of least squares.
