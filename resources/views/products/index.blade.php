<table>
    <tbody>
    @foreach($products as $product)
        <tr>
            <td>
                {{ $product->catalogue_num }}
            </td>
            <td>
                {{ $product->product_name }}
            </td>
            <td>
                @foreach($product->productLots as $lot)
                    {{ $lot->lot_number }}
                    <br>
                @endforeach
            </td>
            <td>
                @foreach($product->productSkus as $sku)
                    {{ $sku->size }} - ${{ $sku->price }}
                    <br>
                @endforeach
            </td>
        </tr>
    @endforeach
    </tbody>
</table>