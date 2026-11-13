---
tag: PWHZ7JCEJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3293206
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54208
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2024
    source: hf-ai-mo-aops
    label: 2024 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Let $f,g:\mathbb{R}\to\mathbb{R}$ be functions with $g(x)=2f(x)+f(x^2),$ for all $x \in \mathbb{R}.$ a) Prove that, if $f$ is bounded in a neighbourhood of the origin and $g$ is continuous in the origin, then $f$ is continuous in the origin.
b) Provide an example of function $f$ , discontinuous in the origin, for which the function $g$ is continuous in the origin.
