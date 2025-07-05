import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PaymentScreen({navigation}) {
  const [selectedUPI, setSelectedUPI] = useState('');

  const upiOptions = [
    {
      label: 'PhonePe',
      icon: 'data:image/jpeg;base64,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'
    },
    {
      label: 'Google Pay',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABrVBMVEX///8peeotqE74vATmQDKZmZmTk5OWlpb//v////37//+5ubn///uRkZHAwMD7+/ulpaXi4uItp1CsrKwpeezu7u4tqUvGxsbt7e3Ozs7kQTCenp709PTZ2dkpeubnPzX/vgD0vgb+vwD///YtplUhdezpOistqkcpe+EtmIr2uADm+uvG5s+n37aQzqKGypu1379IsWUdnkREpmGk1bPz/vhFrF9hunrW79qe1aOJz6HU8OWu479wwYq74MZXtnDF2/ibwO2Gs/Ls9f5elNxJmkxElkOjyvB+f0SuYTvKUDfURzLeQTS0XS6+jXj44NxJh+XA1fjgSUDwqadWnNLle3j/8OcphcksnHKuXzreb2UtkZ2iZzgqirbmLiHrnpT1zcjeZFkndf7xu7iysCT6gQ5JqDv6nhfnViqctibvbxvovxLqfhpQjecslpIunXYnf9CEsi75pBLT5fp4o+7PvRZkrDEsjaPZwRj9sBnxjRjiWBuBpWxNqi/BrUqlsihij6P65JZZhrX/+N3htiz513G2oV2bnnSIlnv556JuldX545j0z1T/8sb3yTOqHDhzAAAMRUlEQVR4nO2di3fT1h3HJT8kXfn6JSuyLduyFVt25lBgYdB2W0dCKHSdtxAYCaMQCGW8Am1ogJWyjnaUbXSlf/N+V7YsXVkKBU7qTLofToKf50jf83t870MKxzEYDAaDwWAwGAwGg8FgMBgMBoPBiA0IIU6y4bDMcdK0j2d/AypxCGOMyGMOT/tw9jWSPH/gnYOHDh06ePjAvCyxyAqDBNN7h365AGi93oJ2/OD8tA9pfyIjLCFu/lBiQdMSIzTtyK+OclC5ZFa7KLAMohw+1kt40TTt3femfWT7EFmW8PsJTfFqpShKonfsnTbElTzt49tfSO1f9xSFDizQK9FbePc3nISmfXj7CQlz7y8kgtE67xwlRY3VrTG/XdBCxEpoCx/Mg/9insthXgmTKpHoaAvHfidLca5byK1D8OiDXiJcLgWC69A8h+IqF4L+x8GohjyWMXdgYZfIslNRe/cAimsqIkTGyUOziSV8PLRguWopB49y8eyKMgyVZbDt5DHiDod1QjcTwVYsxNKhIrAKy4tLJ5YWl+0n8vFXJOGI3rHD9vfjZCIQBNXiSd5SLf7kKomuA73dxSLvaokPgVMkFZGE45OOSEanDctSDVW11BPLmPtA21Us8u6pj37/8R9Sg4//+KcVLOM4idVetFTeAK14CK4zq/MLnVcULO2jjwdNvaunus3u2XP5uHguEhJ4+YwKQvE8iMVDNv5Z2S0NtYR26tIgldJTqVSzCZJ1z6/J8bAQiLBkEakcVGP9Qk9LBAtGLIXylxRF9+Ia+FM5DqkIjXDOMnivWrzxSUdTAq2WllA6lyCkKLU2LuYhD6MfXSQc6MAiicjzl4+EDHegXpFiRaFvXMFxqFvQCZfn7FrlYqjQG9cvaMFyfTiAuKLU0pvd7lVZjr7bAo+1ZPGTqOr6kZ4yaSGUxKVuapLuZj4GYmHpqDFshT6xjGuXA2v8qQGpV02/WhufxmCquc2dtvggseYM6xdBYl3/q66DZZgMLRx9sZA8F5CEdku0LgeIdcNM3rzVbU5GF1StaZ/LnoNPB1WsoVzbPiOvKUridstMPr7TJDWeEkvvXom+WEfPqGFqqcYFjfJaitbpbSX7ptm/S0KL7ojdzWibUnJ2i7QfpYCi5bNYHQisfjLZn73jc1pEubVpn8+eghGS7wW1Qkesz/xFS9tKglTk51aTLvL6YGNl2uezp2CEyXRDuFgT7fB+KznE/MrXEPXmxtVpn8+eIiF8T91FLPVznyHtbc0mHW75IqsJTivSoJ3QVsjb3XAisExHK/Nuyh9Z0RYLcSctPiSwIOBUv8/qfdnqjyPrC91nTCMuFt6xQlMQKpbxuUcsMky87yYhlPiur2hFvGbhB+FikXkHr8nqaB3toZuFIBZtHvSoi7UTbrGIJYVe6BYteHA/2fJEVtKXhvogutYBY4k7YYW6d6hZ20rCM1uqKNrDWbPvjSyfWGejO1OKMVqeC5puGOfhZ5R91zqPkhSP6TRsds9P+5T2Diy3l6xwi8Vb6/QoWus8pJLQvOkfSEe4GWJ7NnmXkvVZj1JLeWRSgWXe9ZnSs/Vpn9LegdDp0CG0oRJD6umF8LhznQqsZPKJq5U+nKGJ7qzD0JCGiWVZn3g8FtR55cYWHVhf6IOxWpCQur4S4e1HMNIJNQ6qYW0f8WxVJob0qSewSFO840lCsix9PspLYWhpN7FU0grHYnUSJLC8tsEu796apUd6KQyd3GW2gZ874l2Q1hLKU9qQzt5p6q5Yeqp7kZMiLBYxWWFi8dbf6CnSRG+iYvkG0VenfT57Coyhw8Wa83us23QrnL1D2YZmdzO67p2wyIcPoiGwaI/1isDqRtmQElZDxIJ4s+aOJOhVndu0xQJDSqlF1u6nfT57ymrIGNrgDeuydwBNXNaXfUqsx7d8O47ORXy70WkrzJNacxc8hhTMu3LfO9uQNJN3m13Kvp/FEd/5FyaWxUNgeTcbaZ0bX7YorejAAt9wTkbRde+E1bD6rhqfawlKrPuzVBbO3vX6Ub3ZHazJEd8Ushq6aL9OrVJoiZ5vbqbvC6yNK9M+lz0nbBFM5X1r9olHtMcyv6I9lt6M9rI9YdkIdvDWuu+66AVfYPlbYTf6gcXJZ/iJ2AL9VO9mEDLvoNCBZfoCKxWHwOLQg8k8VNU5df2YG1nQFTu9657Fwj70wie+wDofg8uc2qsBUzSGb2tkT4HAokzW7M0mPfe+sRLheSwHvDyplWpcW+94DakCHitJ+YbWE3qrEQmsGIgFeTghl2H9/WsoVB3IPzLe0ZQOtWIP3PTujtQHEFhxuFJaDtqapW5vbd2HUtXpkAtVNUX52rek03riM+8Xye21pn0ue44k43uWqtLBZQmt1uzDR+T6Z1urR1s+j3WTKu72hRVSDMTCcnvH8IllGP8wIXrMpzc6ZJvDDRhA05E1S7fCZmqTi8edVpDEPVB5+mqwbSjmrX6ytXX99u2nD31hBXwx8OSgntJJYMVCLI64eLrGW+tOz2slTb9QJAvvUHuyyG7u6Bd3B7xIu3jrm+H8gpns91vJSb0eD9xr58iDbhw8loOE6SsNrezsyKgHBlb/25XNritWUz8X5YVVPxhxS5a9lcZQh83QcVX9/qRUSbPN5a9ABySL9SQJzyMpwvsb/JBbqpw2LLJ0YXgjK5j+t5wso6ubG10w8YNu80q0p5L9YHLjnR135xHUrF3EMp/J4NbltU83B3rq7JWVGPgrLxImtzVa/t65OlP9pzmZfuPAek5ugIug/+XXVtbq5J6A0z7+nxWyzCBDKi4Zlj09w2+bE9ZqrJX5TCJfQM4Fq1He27AbaOeeZajXDNX4LjwPn0d4/9XrgO3gIv/+FSqW+WzaR7lfaCO8eIaME0MrPFSsiK8N/lSQhCW0THbFz23NBtf4/ss4GdBXIWO0OmdY/24FeXcIrHYcbp/yU0Fcm1t+wG9vtYJCq//Mvs8rYwgGuUid/08rYKhjvuAivvXj9UDkimnE7Xz/HVgtr9si148/RxJi9d0HCCK/oCPLNEErHPGNH28INMYXP1Jq9c3/YsTqVSBYkp8999R48wcwDSguc8evDZbll89/TNqTWj/+8KItg1Qxmrd6XaDYt1/aPMM4Hvfye3PIn9mR5eGfJ4JfrF7tBrlHKyJ/w0nGbY55ht0h6qDhL+avGG9Jvg5M+yD+P6hXSzVRrGUaefe1RnmI9zUGxxULopgGRKFQHL+YyQo2ouc1BlcdSmXLJTacVzNizUYURabWmKoAKglpIgtRy6lcGSEzMzNTqVTTYoFl4ogKkSidK1YqjYyYFnLO6xnnYUMQGmFfjhslMS3WRonWEEvj18diwSdKk1+LJRWShBXnWcO1D65YVaFm/z9TLFbinZA5SL1q0BuuWA2hBhrVMzVRSJdIRuZLJafmz5RKlaBvR5NaOl0LDBdvZBUgAmvgIsBciGV4pSRknPey6Z/lMPcFdSEtZgLfccUqkE8UhHSuUawWRKFIYi09yteC2xGiT1EYZ2HeYfh0LFbV7oa5YUusF0i1r4vZYYOsiEKMshBiJDusP/VCacRQB+KzKpVKMSeKBfJ8VKWKglAnbw4bpJ2hscEVayYrDhHK9vOM6JD2Bk++loWnxezQvBZGH44HINbIco7EAofqE8tpdzPVcrlazBdI0crX7OStCMLMlA58GoDNGgVHvVYgeMQqVQnFUQ0rQzvMZsVSjYgFJYzkYVmIlV3NQzccnTCZ0aq7BT9D97myINQymRI0RVusil26CsEWLbLAaMfb0BojMfxiVQQxQ6pUvTp6n+g0I4jxmjCs0kYL0jA9zDtarLLgWNdhGoIbLdk/saIOJd1NJhj8ONLRYmUcz14Xh2LNiEK9kI3bdERZIDXdTqd6jig3MlS0WOMBDljU4ugV+HTcxtX5ArELhUy5DCPltJuTtFg5Z+ZhrGZDEEMGSlGmYms0MllCwZ0p9YpVFMRcnssXC+lRzSL5K8RwvrlSEJxJeFcrLpOlrENJgOgrpbPlwjhPxeDpiohTB8NpD3RqZff0fWLVS/ZaT44rjIZHXC4bowkHLzONXCaTa3jHLjNFeiSTb8AnQKeKY+ljmYVvSGNU8hk/gVI2ThMOb0c9VtN+b0k1G6dpv7ckbhMOb0Mxm43XhMPbUKnGbQzNYDAYDAaDwWAwGAwGg8FgMBgMBoPBeHP+B+/5eHPUDoQ/AAAAAElFTkSuQmCC'
    },
    {
      label: 'Paytm UPI',
      icon: 'data:image/png;base64,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'
    },
    { label: 'Enter UPI ID', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAA0lBMVEX4+Pj///8AuPUBKnIWK3UAt/8AtPX//PgAJnD7+/oyvvXP6fcADGgyR4DP0tsAtvUAtP8AvPkBIGwBfLoAAGYOJnMAsf/GydgAF27e9f8AEmzy/P88SoXD6v8Nuf+a2/90z/88wf8AG2ynrMQABmvo6vBFWIsAAGmEi62an7sAGWsACGdFxPeO1//D6f/Jzty3vs9UZJN50Pbj8vhmy/ah3PZ50vnP3ekAdLZfbpk7UIeHk7Hd4ekaN3lPYJCXobp5hactPX9Txv9ud6ApQn+vs8mTaE0hAAAHpklEQVR4nO2daXuiOhSAiSiK2mK5WFHr2OJaxKUunalL60zr//9LN4GKoGxqHO895P2g0Drxyes5OVmcpxzHYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDMZ/FlFMU0AUr92Pvwg2xuVqs/HUyJ6BMR3PajkOu7t2f/4KYnoyMyRBkqTEmeAmBMmYTWIgTkzXDOFsYS55glGDLi6dywo0nVkI2Vz62j27ICI3vYA0U9yUAxtw6fId1fR0It2VgQZcOnehULMQYCZqunZRa0C9XTjWgHoTJ5eWRphAqwtp42LVYIdkAAu39Oz4FD1hGSHMQHkTq8foEgQhkTWM6dQwsgl8c4y+KqQ0TY8jdp0sMvu1chXZVMu1PlnCRvz3Y1DhFtHZ3biGPKmN7yKau3ZPKSLOInRZkl5z3s4scq9RBjtpBidL00Zod4XErBokzczXWSK8sMAppmI1rLdSYhbmzGKWCIs4AUxREGshfRXq0aQR6iEfgVSDoi2kjgrGJLo1hCZGoDg4tTR4aBMi5qcjUwO9gRnc0tmA4LgrH2sNocB9uywUbaJ/dAjG8dIIAYkqABnbxIlvH4XX06wh9OrfJpBtENF3p00Yn2oNobFvozng2s6x5u8NurbTM9TCJ0+Ba5Om51lDaOpZT4Fry55rDSHPiQ1sbVLoyj2cqle4gdYm+GysHYfXGSJkbdKZ5WCLx/AGWVuCjjWEYhVtdFKUcJimgLWduBL14mB3Ba424YRdDz/KB41D1Xb+RNfJfriB1SYEnlAdy364gdVGcWQjGPHQRq+MWuwVU6jaJLrWEJLioI3WAmHHqxQDbbRzdD9LgWqjnqN7WQpT2ymTtnI/+PeuBT1QbUefJqNqoRD8ghl8bScsrJ4KqeAXuGa8MLXtdnW5kcXQvFuWMMMWuRyORiX8hH+1RNVB/UchlRoMEBoMBjVUq9cn2FO97lxpVOFH2+4IoaRUTDrJJb576ODLvDLH4vDPlRYaKpXeb1S/x9JSqcJ9rnxfKKSe8MN9/5E8/nF4y0LX5qgIpUrSoljEd+2iea39RqiZTDZb6LaXLD6gumktlSLaUt8ULJMOb86aAFNb362tSGzlRzjaVE3T8HVnGKjNujUf73ejZB+8tplb23yOvakNhDbd7qKLf6BuXNpqT09E0dPTxNT29Ghae/yDxRUGdlMz6NqEgVNbcY7Qp2xqM3kpkmunNgzRRcql9dwvYGu4urq0DQTo2moH2jRT2/Jzvo08t7Yq1lX41vYDkazdats1VQOpTbqzkQ60rU1tDUUrmuMcvu4kk5Uh2qhHaHO+AxRtP3/9Y/Prp2ts+901x7MG1/muqkRbj1SJjpoM07ZLUvc7ANF2q8g2ytBdEszqWdls8HWx2bSS9E3ezkyiRtvQ+Q63ULTleZt8ya3NpMM1VDNh22ZJaPXkI7WVnO8AUVtltB9tmqqMENYmv9lVtfVeyefDk3SnbVQBrk3/cI9tz4vFM15PubXZFSOqtg8duDZt4aqk7e9rkqQPy+XcTFJUesa8FaNrW2jAtZGY8tA2cpYE9JLXNQ1fF18ianuTgWvLfHlq4/LF3QTELqVKKVDbbgLylQGujVc5W5uiqQ/2TaeimxBVLxVcKTRdeUamtkLB0lYg25V1/ES0FQr3tjZO5aFray63nW2tu92NHTDc5tmEVNpRl/D8/cpHDHnu9/t1hHL4Dvua4Tt7w3PZBK/NrpQUacCPNkdNoIazIgDVxmv0tWk8fG35YbiH4xjmY6BNW9PWto5DtPE6bW06HwdtjtU8FZzreMDaMnO62uaZWGjjlVua1m4VPh7a5Bea2l7kmGjjlWW4jags94INsDa5Ha4jKm05Ntp4hVoxHe0HG2RtmYxISVsmEyNtvPZJx9qndtA0ZG2U0vQwRYFr4/XW+dZaukfDsLXJN+dru9mvovC18frZ+5VvXsEGXRtfOXMHaV3xbBaOtp5n/3hlEe7Gn4VHOSD0oGs7y5ufNTjaWn495Hsn5+na76PglRYMbZzY9Osir75z4YoO4d5V3yZ7QKxxaHWwArLRVifshixXh4uDLZkVunZ/KXGwJebqpnL0eXOj6f8xkM28a/eXEq7vUXlkVfuoBUOr7TusmeG7gKJNHHnPsOwAsb4jE41nJSB0eXLAA2Vs4/xL6TeqvAkXRtjI/rXAQrl2Z+mxf7jkFSR8I7Smcg0+OGwx8juUHMVZugntLp9R9XXgidbtWlVD7fOVDZgcxQTWhC2asuoOPWOOG3ZXSrQ2rt1TmqCF52bFARmtp7YXo6XDHbccLdpqTwsPNIIOpo5aRAoVE1mrKIr81X7BtL9kRalowbXTCahgw+HW8N488iWTIf8R6PCAJZheA1awcYfnmRdAbgOzxokt+cjIOZ6MDGXzY4f/rhs1oOy0uUDDC3vrDaGlqAn2dsE8zQC1hr0tV9Gmbyegr5ZArZG/9P2pFC8hrah8wv1L3xxJ1Jsm9ZmI3LyBmqBbRFR6V3SK5mRdeS8hyKFmIaLWx7veVHWNrAJOR5Y1XW3q7x+tGEgjiCJZoH+s39o3Z9B+W3+QRb8YD2kWIpXvBcZKGYPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDD+d/wLQncGsKDsDXMAAAAASUVORK5CYII=' },
    { label: 'Pay by any UPI App', icon: 'data:image/png;base64,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' }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <Icon name="arrow-left" size={28} color="black" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 20 }}>Pay ₹32</Text>
      </View>

      {/* Booking Info */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ color: '#666', marginBottom: 4 }}>Review booking</Text>
        <Text style={{ marginBottom: 2 }}>1 passenger</Text>
        <Text style={{ marginBottom: 2 }}>Anna Nagar East → Arignar Anna Alandur</Text>
        <Text style={{ fontWeight: 'bold', marginBottom: 16 }}>Wed, 21 May</Text>
      </View>

      {/* Feature Tags */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, marginBottom: 20 }}>
        {['Secure Payment', 'Superfast Refunds', 'Trusted by 40Mn+ users'].map((tag, i) => (
          <Text key={i} style={{
            backgroundColor: '#e6f4ea',
            color: '#2e7d32',
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 6,
            fontSize: 13,
            marginRight: 8,
            marginBottom: 8
          }}>{tag}</Text>
        ))}
      </View>

      {/* UPI Section */}
      <View style={{
        padding: 20,
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>UPI</Text>
        {upiOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedUPI(item.label)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 12,
              borderWidth: 1,
              borderColor: selectedUPI === item.label ? 'red' : '#ddd',
              borderRadius: 10,
              marginBottom: 10,
              backgroundColor: selectedUPI === item.label ? '#fff0f0' : '#fff',
              gap: 12
            }}
          >
            {item.icon ? (
              <Image
                source={{ uri: item.icon }}
                style={{ height: 36, width: 36, resizeMode: 'contain' }}
              />
            ) : (
              <View style={{ height: 36, width: 36 }} />
            )}
            <Text style={{ flex: 1, fontSize: 16 }}>{item.label}</Text>
            <RadioButton
              value={item.label}
              status={selectedUPI === item.label ? 'checked' : 'unchecked'}
              onPress={() => setSelectedUPI(item.label)}
              color="red"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Card Section */}
      <View style={{
        padding: 20,
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        marginBottom: 30,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>Credit/Debit Card</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('CreditCard')}style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="credit-card-outline" size={28} color="black" />
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add credit / debit card</Text>
            <Text style={{ fontSize: 14, color: '#666' }}>Visa, MasterCard and more</Text>
          </View>
          <Icon name="chevron-right" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}