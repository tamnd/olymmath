---
tag: TFXXCEQJ5K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1979 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h3053414
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54259
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1979
    source: hf-ai-mo-aops
    label: 1979 Romania Team Selection Tests
---
If $n>2$ is a positive integer, compute
$$\max_{1\leqslant k\leqslant n}\max_{n_1+...+n_k=n}
\binom{n_1}{2}\binom{n_2}{2}\ldots\binom{n_k}{2}.$$

*Ioan Tomescu*
