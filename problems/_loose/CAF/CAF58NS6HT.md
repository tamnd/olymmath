---
tag: CAF58NS6HT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland Selektion
---
Let $(a, b)$ be a pair of positive integers. Henning and Paul are playing a game: Initially, there are two piles of $a$ and $b$ stones, respectively, on a table. The pair $(a, b)$ is called the initial configuration of the game. The players proceed as follows:
- The players alternate and Henning begins.
- In each turn, a player either removes a positive number of stones from one of the two piles or the same positive number of stones from both piles.
- The player who removes the last stone from the table wins the game.
Let $A$ be the set of all positive integers $a$ for which there exists a positive integer $b<a$ such that Paul has a winning strategy for the initial configuration $(a, b)$. Order the elements of $A$ increasingly as $a_{1}<a_{2}<\ldots$

a. Prove that the set $A$ is infinite.
b. Prove that the sequence $\left(m_{k}\right)_{k \geq 1}$ defined by $m_{k}:=a_{k+1}-a_{k}$ for all $k \geq 1$ is not eventually periodic.

Remark: A sequence $\left(x_{k}\right)_{k \geq 1}$ is eventually periodic if there exists an integer $k_{0} \geq 0$ such that the sequence $\left(x_{k+k_{0}}\right)_{k \geq 1}$ is periodic.
