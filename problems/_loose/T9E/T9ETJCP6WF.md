---
tag: T9ETJCP6WF
kind: problem
type: answer
answer: "1990"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
5$\cdot$106 $n$ countries, each with 3 representatives, forming $m$ committees $A_{n}(1)$, $A_{n}(2), \cdots, A_{n}(m)$ is called a conference circle if
（1）each committee has $n$ members, each from a different country, one from each;
（2）no two committees have exactly the same members;
(3) $A_{n}(i)$ and $A_{n}(i+1)$ have no common members, $i=1,2, \cdots, m$. It is also agreed that $A_{n}(m+1)=A_{n}(1)$;
(4) if $1<|i-j|<m-1$, then $A_{n}(i)$ and $A_{n}(j)$ have at least 1 common member.
Does there exist a conference circle consisting of 1990 committees from 11 countries?
