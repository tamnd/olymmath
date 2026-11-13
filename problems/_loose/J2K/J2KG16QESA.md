---
tag: J2KG16QESA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h1822222
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18500
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2019
    source: hf-ai-mo-aops
    label: 2019 Vietnam National Olympiad
---
For each real coefficient polynomial $f(x)={{a}_{0}}+{{a}_{1}}x+\cdots +{{a}_{n}}{{x}^{n}}$ , let $$ \Gamma (f(x))=a_{0}^{2}+a_{1}^{2}+\cdots +a_{m}^{2}. $$ Let be given polynomial $P(x)=(x+1)(x+2)\ldots (x+2020).$ Prove that there exists at least $2019$ pairwise distinct polynomials ${{Q}_{k}}(x)$ with $1\le k\le {{2}^{2019}}$ and each of it satisfies two following conditions:
i) $\deg {{Q}_{k}}(x)=2020.$
ii) $\Gamma \left( {{Q}_{k}}{{(x)}^{n}} \right)=\Gamma \left( P{{(x)}^{n}} \right)$ for all positive initeger $n$ .
