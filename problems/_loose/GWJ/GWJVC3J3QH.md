---
tag: GWJVC3J3QH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a,b)$ be a pair of natural numbers. Henning and Paul play the following game. At the beginning there are two piles of $a$ and $b$ coins respectively. We say that $(a,b)$ is the *starting position *of the game. Henning and Paul play with the following rules:
$\bullet$ They take turns alternatively where Henning begins.
$\bullet$ In every step each player either takes a positive integer number of coins from one of the two piles or takes same natural number of coins from both piles.
$\bullet$ The player how take the last coin wins.
Let $A$ be the set of all positive integers like $a$ for which there exists a positive integer $b<a$ such that Paul has a wining strategy for the starting position $(a,b)$. Order the elements of $A$ to construct a sequence $a_1<a_2<a_3<\dots$
$(a)$ Prove that $A$ has infinity many elements.
$(b)$ Prove that the sequence defined by $m_k:=a_{k+1}-a_{k}$ will never become periodic. (This means the sequence $m_{k_0+k}$ will not be periodic for any choice of $k_0$)
