---
tag: KC3TDRA1QQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947283
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18166
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
A *complex set*, along with its *complexity*, is defined recursively as the following:

- The set $\mathbb{C}$ of complex numbers is a complex set with complexity $1$ .
- Given two complex sets $C_1, C_2$ with complexity $c_1, c_2$ respectively, the set of all functions $f:C_1\rightarrow C_2$ is a complex set denoted $[C_1, C_2]$ with complexity $c_1 + c_2$ .

A *complex expression*, along with its *evaluation* and its *complexity*, is defined recursively as the following:

- A single complex set $C$ with complexity $c$ is a complex expression with complexity $c$ that evaluates to itself.
- Given two complex expressions $E_1, E_2$ with complexity $e_1, e_2$ that evaluate to $C_1$ and $C_2$ respectively, if $C_1 = [C_2, C]$ for some complex set $C$ , then $(E_1, E_2)$ is a complex expression with complexity $e_1+e_2$ that evaluates to $C$ .

For a positive integer $n$ , let $a_n$ be the number of complex expressions with complexity $n$ that evaluate to $\mathbb{C}$ . Let $x$ be a positive real number. Suppose that $$a_1+a_2x+a_3x^2+\dots = \dfrac{7}{4}.$$ Then $x=\frac{k\sqrt{m}}{n}$ , where $k$ , $m$ , and $n$ are positive integers such that $m$ is not divisible by the square of any integer greater than $1$ , and $k$ and $n$ are relatively prime. Compute $100k+10m+n$ .

*Proposed by Luke Robitaille and Yannick Yao*
