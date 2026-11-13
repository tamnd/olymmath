---
tag: 57Q8BVHPTS
kind: problem
appearances:
  - at: pumac/2019/ca7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
In the country of PUMACsboro, there are $n$ distinct cities labelled $1$ through $n$. There is a rail line going from city $i$ to city $j$ if and only if $i<j$; you can only take this rail line from city $i$ to city $j$. What is the smallest possible value of $n$, such that if each rail line's track is painted orange or black, you can always take the train between $2019$ cities on tracks that are all the same color? (This means there are some cities $c_1,c_2,\ldots,c_{2019}$, such that there is a rail line going from city $c_i$ to $c_{i+1}$ for all $1\le i\le 2018$, and their rail lines' tracks are either all orange or all black.)
