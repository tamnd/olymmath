---
tag: ARMT7YPGSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2590347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20390
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Romania Team Selection Test
---
Let $\alpha$ be a real number in the interval $(0,1).$ Prove that there exists a sequence $(\varepsilon_n)_{n\geq 1}$ where each term is either $0$ or $1$ such that the sequence $(s_n)_{n\geq 1}$ $$s_n=\frac{\varepsilon_1}{n(n+1)}+\frac{\varepsilon_2}{(n+1)(n+2)}+...+\frac{\varepsilon_n}{(2n-1)2n}$$verifies the inequality $$0\leq \alpha-2ns_n\leq\frac{2}{n+1}$$ for any $n\geq 2.$
