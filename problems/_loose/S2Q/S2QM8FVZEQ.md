---
tag: S2QM8FVZEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54186
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2022
    source: hf-ai-mo-aops
    label: 2022 Romania National Olympiad
---
Let $(R,+,\cdot)$ be a ring with center $Z=\{a\in\mathbb{R}:ar=ra,\forall r\in\mathbb{R}\}$ with the property that the group $U=U(R)$ of its invertible elements is finite. Given that $G$ is the group of automorphisms of the additive group $(R,+),$ prove that $$|G|\geq\frac{|U|^2}{|Z\cap U|}.$$*Dragoș Crișan*
