---
tag: K9FXBV4J0A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are villager $0$, villager $1$, . . . , villager $2015$ i.e. $2016$ people in the village. You are villager $0$. Each villager is either honest or liar. You don't know each villager is honest or liar, but you know you are honest and the number of liar is equal or smaller than integer $T$.
The villagers became to write one letter without fail from one day. For integers $1 \le n \le 2015$, there are set integers $1 < k_n < 2015$. The letter villager $i$ wrote in day $n$ of the morning is delivered to villager $i + k_n$ if villager $i$ is honest, or villager $i - k_n$ if villager $i$ is liar in day $n$ of the evening. If $i - j$ is divisible by $2016$, villager $i$ and $j$ point same villager. Villagers don't know $k_n$, but sender is told when letters are received. Villager can write anything on a letter, and each villager receives letters from any villagers a sufficient number of times after enough time. i.e. there are $n$ satisfying $k = k_n$ infinitely for each integer $1 \le k \le 2015$.
You want to know the honest persons of this village. You can gather all villagers just once and instruct in one day of noon. The honest person obeys your instruction but the liar person not always obeys and he or she writes on a letter anything possible.
One day from your instruction for a while, you could determine all honest persons of this village. Find the maximum value of $T$ such that it is possible to do this if you instruct appropriate regardless of the villagers who are honest or liar.
