---
tag: WHQVPTGW5Y
kind: problem
type: answer
answer: K[(1+\frac{p_{1}}{100})^{n}-(1+\frac{p}{100})^{n}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A bank, paying a depositor $p \%$ annually, borrows, in turn, capital at $p_{1} \%$ (of course, $p_{1}>p$). What will be the bank's profit from the capital $\boldsymbol{K}$ entrusted to it after $n$ years, if interest is added to the capital annually? Why is the solution: profit $=K\left(\frac{p_{1}}{100}-\frac{p}{100}\right)^{n}$ incorrect?
