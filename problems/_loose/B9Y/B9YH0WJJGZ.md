---
tag: B9YH0WJJGZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer is called *uphill * if the digits in its decimal representation form an increasing sequence from left to right. That is, a number $\overline{a_1a_2... a_n}$ is uphill if $a_i \le a_{i+1}$ for all $i$. For example, $123$ and $114$ are both uphill. Suppose a polynomial $P(x)$ with rational coefficients takes on an integer value for each uphill positive integer $x$. Is it necessarily true that $P(x)$ takes on an integer value for each integer $x$?
