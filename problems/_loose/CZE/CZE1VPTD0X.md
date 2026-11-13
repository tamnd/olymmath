---
tag: CZE1VPTD0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3283889
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1623
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2024
    source: hf-ai-mo-aops
    label: 2024 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China The 65th IMO China National Team Selection Test
---
$n>1$ is an integer. Let real number $x>1$ satisfy $$ x^{101}-nx^{100}+nx-1=0. $$ Prove that for any real $0<a<b<1$ , there exists a positive integer $m$ so that $a<\{x^m\}<b.$ *Proposed by Chenjie Yu*
