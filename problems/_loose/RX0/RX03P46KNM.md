---
tag: RX03P46KNM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2937786
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39329
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1987
    source: hf-ai-mo-aops
    label: 1987 Bundeswettbewerb Mathematik
---
Let $1<k\leq n$ be positive integers and $x_1 , x_2 , \ldots , x_k$ be positive real numbers such that $x_1 \cdot x_2 \cdot \ldots \cdot x_k = x_1 + x_2 + \ldots +x_k.$ a) Show that $x_{1}^{n-1} +x_{2}^{n-1} + \ldots +x_{k}^{n-1} \geq kn.$ b) Find all numbers $k,n$ and $x_1, x_2 ,\ldots , x_k$ for which equality holds.
