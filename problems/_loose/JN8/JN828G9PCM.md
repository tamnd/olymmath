---
tag: JN828G9PCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h1388471
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13232
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2015 Tournament of Towns
---
Several distinct real numbers are written on a blackboard. Peter wants to create an algebraic expression such that among its values there would be these and only these numbers. He may use any real numbers, brackets, signs $+, -, \times$ and a special sign $\pm$ . Usage of $\pm$ is equivalent to usage of $+$ and $-$ in all possible combinations. For instance, the expression $5 \pm 1$ results in $\{4, 6\}$ , while $(2 \pm 0.5) \pm 0.5$ results in $\{1, 2, 3\}$ .
Can Peter construct an expression if the numbers on the blackboard are :
(a) $1, 2, 4$ ? *( $2$ points)*
(b) any $100$ distinct real numbers ? *( $6$ points)*
