---
tag: YMVDZJY976
kind: problem
type: answer
answer: A=2,B=7,C=10,D=5,E=3,F=9,G=4,H=6,I=8,J=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each letter from $A$ to $J$ represents a distinct number from 1 to 10. In the table below, each number written represents the product of the number in its row by the number in its column. For example, $A \cdot F=18$.

| $\times$ | $A$ | $B$ | $C$ | $D$ | $E$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $F$ | 18 | | | | |
| $G$ | | | | 20 | |
| $H$ | | 42 | | | |
| $I$ | | | | | 24 |
| $J$ | | | 10 | | |

Using the equation

$$
A+B+C+D+E=F+G+H+I
$$

and knowing the five values in the table, determine the value of each letter from $A$ to $J$.
