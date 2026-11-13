---
tag: GJ7WEE1EM0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1557179
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42254
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2017
    source: hf-ai-mo-aops
    label: 2017 India IMO Training Camp
---
Let $P_c(x)=x^4+ax^3+bx^2+cx+1$ and $Q_c(x)=x^4+cx^3+bx^2+ax+1$ with $a,b$ real numbers, $c \in \{1,2, \dots, 2017\}$ an integer and $a \ne c$ . Define $A_c=\{\alpha | P_c(\alpha)=0\}$ and $B_c=\{\beta | P(\beta)=0\}$ .

(a) Find the number of unordered pairs of polynomials $P_c(x), Q_c(x)$ with exactly two common roots.

(b) For any $1 \le c \le 2017$ , find the sum of the elements of $A_c \Delta B_c$ .
