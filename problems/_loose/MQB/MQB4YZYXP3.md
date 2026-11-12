---
tag: MQB4YZYXP3
kind: problem
type: answer
answer: "200"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the country of Limpopo, there are four national currencies: bananas (B), coconuts (K), raccoons $(\mathcal{E})$, and dollars (\$). The exchange rates for these currencies (the same in all exchange points in the country) are given below:

---

The number on the arrow indicates how many units, specified at the end of the arrow, can be obtained for one unit, specified at the beginning of the arrow. For example, one raccoon can be exchanged for 6 bananas or 11 coconuts, one dollar for 10 coconuts, and one coconut for $1 / 15$ dollars. (When solving the problem, any currency can be divided into arbitrarily small parts: for example, 101/43 raccoons can be exchanged for $606 / 43$ bananas). Exchanges $\$ \leftrightarrows \mathcal{E}$ and $\$ \leftrightarrows$ B are prohibited in Limpopo.

Money can be transported across the border of Limpopo only in dollars. Uncle Vasya arrived in Limpopo with 100 dollars. He can perform the above exchange operations any number of times, but has no other sources of income. Can he get rich and take 200 dollars out of Limpopo? If yes, explain how. If not, prove it.
