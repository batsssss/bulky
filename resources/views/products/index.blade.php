<table>
    <tbody>
    @foreach($products as $product)
        <tr>
            <td>
                {{ $product->catalogue_num }}
            </td>
            <td>
                {{ $product->product_name }}
                <br>
                {{ $product->appearance }}
            </td>
            <td>
                Recert in: {{ $product->years_to_recertify }} years
            </td>
            <td>
                @foreach($product->productLots as $lot)
                    {{ $lot->lot_number }} - {{ $lot->date_certified }} - {{ $lot->date_expires }}
                - {{ $lot->initial }} - {{ $lot->available }}
                    <br>
                    @foreach($lot->productLotContainers as $container)
                        {{ $container->container_num }} - {{ $container->initial }}
                        - {{ $container->used }} - {{ $container->remaining }}
                        - {{ $container->storageLocation->name }}
                        - {{ $container->packaging->name }}
                        <br>
                    @endforeach
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