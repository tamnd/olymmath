---
tag: 84R1YA6FT3
kind: problem
appearances:
  - at: pumac/2016/ca8
    primary: true
  - at: pumac/2016/cb8
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2016 official paper
    url: https://pumac.princeton.edu/s/PUMaC2016_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Katie Ledecky and Michael Phelps each participate in $7$ swimming events in the Olympics (and there is no event that they both participate in). Ledecky receives $g_L$ gold, $s_L$ silver, and $b_L$ bronze medals, and Phelps receives $g_P$ gold, $s_P$ silver, and $b_P$ bronze medals. Ledecky notices that she performed objectively better than Phelps: for all positive real numbers $w_b<w_s<w_g$, we have
$$w_gg_L+w_ss_L+w_bb_L>w_gg_P+w_ss_P+w_bb_P.$$
Compute the number of possible $6$-tuples $(g_L,s_L,b_L,g_P,s_P,b_P)$.
