---
tag: TMAWRRCCKK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h55868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35795
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Suppose $A\subset \{(a_1,a_2,\dots,a_n)\mid a_i\in \mathbb{R},i=1,2\dots,n\}$ . For any $\alpha=(a_1,a_2,\dots,a_n)\in A$ and $\beta=(b_1,b_2,\dots,b_n)\in A$ , we define
$$ \gamma(\alpha,\beta)=(|a_1-b_1|,|a_2-b_2|,\dots,|a_n-b_n|), $$ $$ D(A)=\{\gamma(\alpha,\beta)\mid\alpha,\beta\in A\}. $$ Please show that $|D(A)|\geq |A|$ .
