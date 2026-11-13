---
tag: PKXFPZTKPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42543
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1990
    source: hf-ai-mo-aops
    label: 1990 China Team Selection Test
---
In set $S$ , there is an operation $'' \circ ''$ such that $\forall a,b \in S$ , a unique $a \circ b \in S$ exists. And

(i) $\forall a,b,c \in S$ , $(a \circ b) \circ c = a \circ (b \circ c)$ .

(ii) $a \circ b \neq b \circ a$ when $a \neq b$ .

Prove that:

a.) $\forall a,b,c \in S$ , $(a \circ b) \circ c = a \circ c$ .

b.) If $S = \{1,2, \ldots, 1990\}$ , try to define an operation $'' \circ ''$ in $S$ with the above properties.
