---
tag: 785AYNDKNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65338
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
If two real numbers $ x$ and $ y$ satisfy the equation $ \frac{x}{y} = x - y$ , then:
$ \textbf{(A)}\ {x \ge 4}\text{ and }{x \le 0}
\textbf{(B)}\ {y}\text{ can equal }{1}
\textbf{(C)}\ \text{both }{x}\text{ and }{y}\text{ must be irrational}
\textbf{(D)}\ {x}\text{ and }{y}\text{ cannot both be integers}
\textbf{(E)}\ \text{both }{x}\text{ and }{y}\text{ must be rational}$
