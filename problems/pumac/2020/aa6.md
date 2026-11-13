---
tag: 46TJ3YD4J4
kind: problem
appearances:
  - at: pumac/2020/aa6
    primary: true
  - at: pumac/2020/ab8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020AlgebraAQuestions.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747851
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73228
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given integer $n$ , let $W_n$ be the set of complex numbers of the form $re^{2qi\pi}$ , where $q$ is a rational number so that $q_n \in Z$ and $r$ is a real number. Suppose that p is a polynomial of degree $ \ge 2$ such that there exists a non-constant function $f : W_n \to C$ so that $p(f(x))p(f(y)) = f(xy)$ for all $x, y \in W_n$ . If $p$ is the unique monic polynomial of lowest degree for which such an $f$ exists for $n = 65$ , find $p(10)$ .
