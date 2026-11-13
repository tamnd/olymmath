---
tag: WJTY2B8TAN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India PRMO
    url: https://artofproblemsolving.com/community/c6h1903719
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17840
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2019
    source: hf-ai-mo-aops
    label: 2019 India PRMO
---
For $n \geq 1$ , let $a_n$ be the number beginning with $n$ $9$ 's followed by $744$ ; eg., $a_4=9999744$ . Define $$ f(n)=\text{max}\{m\in \mathbb{N} \mid2^m ~ \text{divides} ~ a_n \} $$ , for $n\geq 1$ . Find $f(1)+f(2)+f(3)+ \cdots + f(10)$ .
