---
tag: 929BMGVYPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h3227990
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2304
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2024
    source: hf-ai-mo-aops
    label: 2024 Vietnam National Olympiad
---
For each real number $x$ , let $\lfloor x \rfloor$ denote the largest integer not exceeding $x$ .
A sequence $\{a_n \}_{n=1}^{\infty}$ is defined by $a_n = \frac{1}{4^{\lfloor -\log_4 n \rfloor}}, \forall n \geq 1.$ Let $b_n = \frac{1}{n^2} \left( \sum_{k=1}^n a_k - \frac{1}{a_1+a_2} \right), \forall n \geq 1.$ a) Find a polynomial $P(x)$ with real coefficients such that $b_n = P \left( \frac{a_n}{n} \right), \forall n \geq 1$ .
b) Prove that there exists a strictly increasing sequence $\{n_k \}_{k=1}^{\infty}$ of positive integers such that $$ \lim_{k \to \infty} b_{n_k} = \frac{2024}{2025}. $$
