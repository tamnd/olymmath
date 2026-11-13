---
tag: VSFFABS9YB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231865
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a sextuple of positive real numbers $(a_1, a_2, a_3, b_1, b_2, b_3)$ is $\textit{phika}$ if $a_1 + a_2 + a_3 = b_1 + b_2 + b_3 = 1$.

(a) Prove that there exists a $\textit{phika}$ sextuple $(a_1, a_2, a_3, b_1, b_2, b_3)$ such that:
$$a_1(\sqrt{b_1} + a_2) + a_2(\sqrt{b_2} + a_3) + a_3(\sqrt{b_3} + a_1) > 1 - \frac{1}{2022^{2022}}$$

(b) Prove that for every $\textit{phika}$ sextuple $(a_1, a_2, a_3, b_1, b_2, b_3)$, we have:
$$a_1(\sqrt{b_1} + a_2) + a_2(\sqrt{b_2} + a_3) + a_3(\sqrt{b_3} + a_1) < 1$$
