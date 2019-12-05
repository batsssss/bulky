<h2>Products</h2>
<table>
    <tbody>
    @foreach($products as $product)
        <tr>
            <td style="border-top: 1px solid gray;">
                {{ $product->catalogue_num }}
            </td>
            <td style="border-top: 1px solid gray;">
                {{ $product->product_name }}
                <br>
                {{ $product->appearance }}
            </td>
            <td style="border-top: 1px solid gray;">
                Lead time: {{ $product->lead_time }} days
                <br>
                Recert in: {{ $product->years_to_recertify }} years
            </td>
            <td style="border-top: 1px solid gray;">
                @foreach($product->productLots as $lot)
                    {{ $lot->lot_number }} - {{ $lot->date_certified }} - {{ $lot->date_expires }}
                - {{ $lot->initial }} - {{ $lot->remaining }} - {{ $lot->reserved }} - {{ $lot->available }}
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
            <td style="border-top: 1px solid gray;">
                @foreach($product->productSkus as $sku)
                    {{ $sku->size }} - ${{ $sku->price }}
                    <br>
                @endforeach
            </td>
        </tr>
    @endforeach
    </tbody>
</table>

<h2>Orders</h2>
<table>
    <tbody>
    @foreach($orders as $order)
        <tr>
            <td>
                {{ $order->order_num }}
            </td>
            <td colspan="6">
                {{ $order->order_date }}
            </td>
        </tr>
        @foreach($order->orderItems as $orderItem)
            <tr>
                <td>
                    {{ $orderItem->catalogue_num }}
                </td>
                <td>
                    {{ $orderItem->product_name }}
                </td>
                <td>
                    {{ $orderItem->size }}
                </td>
                <td>
                    {{ $orderItem->price }}
                </td>
                <td>
                    {{ $orderItem->quantity }}
                </td>
                <td>
                    {{ $orderItem->reserved }}
                </td>
                <td>
                    @isset($orderItem->productLot)
                    {{ $orderItem->productLot->lot_number }}
                    @endisset
                </td>
                <td>
                    {{ $orderItem->scheduled_date }}
                </td>
            </tr>
        @endforeach
    @endforeach
    </tbody>
</table>